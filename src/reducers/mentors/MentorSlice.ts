import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {collection,doc,getDoc,getDocs , query , limit} from "firebase/firestore";
import {db} from "firebase.config"

export const mentorsApi = createApi({
  reducerPath : "mentors",
  baseQuery : fakeBaseQuery(),
  tagTypes : ["Mentors"],
  endpoints : (builder) => ({
    getMentors : builder.query({
      async queryFn(amount = 48) {
        try {
          const mentorQuerySlug = query(collection(db, "testimonial"), limit(amount));
          const querySnaphot = await getDocs(mentorQuerySlug);
          let mentors : any[] = [];
          querySnaphot?.forEach((doc) => {
            mentors.push(doc.data());
          });
          return { data: mentors };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["Mentors"],
    })
  })
})

export const {useGetMentorsQuery} = mentorsApi 

export default mentorsApi