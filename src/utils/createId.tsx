let id = parseInt(window.localStorage.getItem('tagMaxId') || '0');
const createId = (): number => {
  id += 1;
  window.localStorage.setItem('tagMaxId', JSON.stringify(id));
  return id;
};
export default createId;
