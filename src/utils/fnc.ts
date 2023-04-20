export const renderKeyProps = (...arg : any[])   => {
  return `${arg[0]}__${arg[1]}`
}
export const isMobile = function() {
  let  _isMobile = /iphone|ipod|android|ie|blackberry|fennec/.test(
    navigator.userAgent.toLowerCase()
  );
  return _isMobile;
}
export const convertProcress = (i = ""): string => {
  if (parseInt(i) < 1) return `${i} Month`;
  return `${i} Months`;
};