var ClosedRange = function(min, max) {
  if (min > max) {
    throw new Error('上端点より下端点が大きい閉区間は作れないよ');
  }
  if (min === undefined) {
    throw new Error('下端点が空だよ');
  }
  if (max === undefined) {
    throw new Error('上端点が空だよ');
  }
  if (typeof(min) !== 'number') {
    throw new Error('下端点が数字じゃないよ');
  }
  if (typeof(max) !== 'number') {
    throw new Error('上端点が数字じゃないよ');
  }
  this.min = min;
  this.max = max;
};
ClosedRange.prototype.getLowerEndpoint = function(){
    return this.min;
};
ClosedRange.prototype.getUpperEndpoint = function(){
    return this.max;
};
ClosedRange.prototype.toString = function(){
    return '[' + this.min + ',' + this.max + ']';
};
ClosedRange.prototype.contains = function(num) {
  return this.min <= num && this.max >= num;
};
ClosedRange.prototype.equals = function(other) {
  return this.min === other.min && this.max === other.max;
};
