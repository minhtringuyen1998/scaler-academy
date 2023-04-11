export const renderKeyProps = (...arg : any[])   => {
  return `${arg[0]}__${arg[1]}`
}
export const isMobile = function() {
  let  _isMobile = /iphone|ipod|android|ie|blackberry|fennec/.test(
    navigator.userAgent.toLowerCase()
  );
  return _isMobile;
}