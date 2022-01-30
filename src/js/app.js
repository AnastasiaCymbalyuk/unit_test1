// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));
export default function objHealthy(obj) {
  let result;
  if (obj.health > 50) {
    result = 'healthy';
  } else if (obj.health < 50 && obj.health > 15) {
    result = 'wounded';
  } else {
    result = 'critical';
  }
  return result;
}
