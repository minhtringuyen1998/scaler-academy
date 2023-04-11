import clsx from "clsx";
import AcademyButton from "components/UI/academy-button/AcademyButton";
import Flex from "components/UI/flex/Flex";
import TextUnderline from "components/UI/text-undeline/TextUnderline";
import { useState, useEffect, useCallback, useRef } from "react";
import { ICourse, IModule, listCourse } from "utils/data";
import Modules from "./components/Modules/Modules";
import "./Curriculum.scss";
import { useInView } from "framer-motion";
export interface ILession {
  titleLession: string;
  listUnit: string[];
  processLession?: string | number;
}

const CurriculumSection = () => {
  const [course, setCourse] = useState<ICourse>(listCourse[0]);
  const [activeModule, setActiveModule] = useState("");
  const [module, setModule] = useState<IModule>();
  const [nextModule, setNextMoudle] = useState<{
    name: string;
    index: number;
  }>();
  const convertProcress = (i = ""): string => {
    if (parseInt(i) < 1) return `${i} Month`;
    return `${i} Months`;
  };
  useEffect(() => {
    setModule(course.modules[0]);
  }, [course]);
  const handleChangeModule = useCallback(
    (module: IModule) => {
      const currIndexModule = course.modules.findIndex(
        (mod: IModule) => mod.nameModule === module.nameModule
      );
      if (currIndexModule !== -1 && course.modules[currIndexModule + 1]) {
        setNextMoudle({
          name: course.modules[currIndexModule + 1].nameModule,
          index: currIndexModule + 2,
        });
      } else {
        setNextMoudle(undefined);
      }
    },
    [course.modules]
  );
  useEffect(() => {
    if (module) {
      setActiveModule(module.nameModule);
      handleChangeModule(module);
    }
  }, [module, handleChangeModule]);
  const curriculumRef = useRef(null);
  const isInView = useInView(curriculumRef);
  return (
    <section id="curriculum" className="curriculum-section" ref={curriculumRef}>
      <div className="sr-container">
        <h3 className="header-curriculum-title">
          <b>Curriculum</b> is designed to make you{" "}
          <b>
            <TextUnderline contents="a solid engineer" />{" "}
          </b>
        </h3>
        <Flex classes={["academy-curriculum__course"]}>
          {listCourse.map((item: ICourse, i: number) => {
            return (
              <div
                className={clsx(
                  "course-container",
                  listCourse[i] === course && "active-course"
                )}
                key={`${item.month}___${i}`}
              >
                <div
                  className="course-container__item"
                  onClick={() => {
                    setCourse(item);
                  }}
                >
                  <div className="coure-content">
                    <h4>{item.name}</h4>
                    <p>Month {convertProcress(item.month)}</p>
                  </div>
                  <div className="circler-border">
                    <div className="circle"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </Flex>
        <div className="academy-curriculum__course__content">
          {course && (
            <div className="list-modules">
              {course.modules.map((item: any, i: number) => {
                return (
                  <Modules
                    {...item}
                    index={i}
                    modulesActive={activeModule}
                    key={`${item}___${i}`}
                    handleClick={(module: IModule) => {
                      setModule(module);
                    }}
                  />
                );
              })}
            </div>
          )}
          <div className="container-list-lessions">
            <div className="list-lessions">
              <div className="process">{convertProcress(module?.process)}</div>
              <div className="wrapper-list-lession">
                {module?.lessions.map((lession: ILession, i: number) => {
                  return (
                    <div
                      className="lession-container"
                      key={`${lession.titleLession}___${i}`}
                    >
                      <div className="line"></div>
                      <ul className="lession-content">
                        <li className="title-lession">
                          {lession.titleLession}
                        </li>
                        <ul className="units-lession">
                          {lession.listUnit.map((unit: string) => {
                            return (
                              <li className="unit" key={`${unit}___${i}`}>
                                {unit}
                              </li>
                            );
                          })}
                        </ul>
                      </ul>
                      {i === course.modules.length - 1 && (
                        <div className="line"></div>
                      )}
                    </div>
                  );
                })}
              </div>
              {nextModule && (
                <div
                  className="navigate-text"
                  onClick={() => {
                    const currModule = course.modules.findIndex(
                      (i) => i.nameModule === module?.nameModule
                    );
                    if (currModule !== -1) {
                      setModule(course.modules[currModule + 1]);
                    }
                  }}
                >
                  Read Next: {`Module - ${nextModule.index} ${nextModule.name}`}
                </div>
              )}
            </div>
            <div className="wrapper-btn">
              <AcademyButton
                variant="secondary"
                mode="solid"
                content="Download Curriculum"
                fullWidth
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CurriculumSection;
