// 閉区間 [3,8]
module('閉区間 [3,8] の場合', {
  setup: function() {
    this.range = new ClosedRange(3, 8);
  }
});

test('下端点は3を返す', function(assert) {
  assert.equal(this.range.getLowerEndpoint(), 3);
});

test('上端点は8を返す', function(assert) {
  assert.equal(this.range.getUpperEndpoint(), 8);
});

test('文字列表記"[3,8]"を返す', function(assert) {
  assert.equal(this.range.toString(), '[3,8]');
});

test('閉区間が指定した整数を含むか', function(assert) {
  assert.ok(!this.range.contains(-1),               '[3,8] は -1 を含まない');
  assert.ok(!this.range.contains(2),                '[3,8] は 2 を含まない');
  assert.ok(this.range.contains(3),                 '[3,8] は 3 を含む');
  assert.ok(this.range.contains(4),                 '[3,8] は 4 を含む');
  assert.ok(this.range.contains(5),                 '[3,8] は 5 を含む');
  assert.ok(this.range.contains(7),                 '[3,8] は 7 を含む');
  assert.ok(this.range.contains(8),                 '[3,8] は 8 を含む');
  assert.ok(!this.range.contains(9),                '[3,8] は 9 を含まない');
  assert.ok(!this.range.contains(Number.MAX_VALUE), '[3,8] は Number.MAX_VALUE を含まない');
});

test('閉区間が別の閉区間と等しいか', function(assert) {
  assert.ok(this.range.equals(new ClosedRange(3, 8)),  '[3,8] は [3,8] と等しい');
  assert.ok(!this.range.equals(new ClosedRange(1, 6)), '[3,8] は [1,6] と等しくない');
  assert.ok(!this.range.equals(new ClosedRange(3, 4)), '[3,8] は [3,4] と等しくない');
  assert.ok(!this.range.equals(new ClosedRange(7, 8)), '[3,8] は [7,8] と等しくない');
});

// 閉区間 [-1,0]
module('閉区間 [-1,0] の場合', {
  setup: function() {
    this.range = new ClosedRange(-1,0);
  }
});

test('下端点は-1を返す', function(assert) {
  assert.equal(this.range.getLowerEndpoint(), -1);
});

test('上端点は0を返す', function(assert) {
  assert.equal(this.range.getUpperEndpoint(), 0);
});

test('文字列表記"[-1,0]"を返す', function(assert) {
  assert.equal(this.range.toString(), '[-1,0]');
});

test('閉区間が指定した整数を含むか', function(assert) {
  assert.ok(!this.range.contains(Number.MIN_VALUE), '[-1,0] は Number.MIN_VALUE を含まない');
  assert.ok(!this.range.contains(-2),               '[-1,0] は -2 を含まない');
  assert.ok(this.range.contains(-1),                '[-1,0] は -1 を含む');
  assert.ok(this.range.contains(0),                 '[-1,0] は 0 を含む');
  assert.ok(!this.range.contains(1),                '[-1,0] は 1 を含まない');
  assert.ok(!this.range.contains(Number.MAX_VALUE), '[-1,0] は Number.MAX_VALUE を含まない');
});

test('閉区間が別の閉区間と等しいか', function(assert) {
  assert.ok(this.range.equals(new ClosedRange(-1, 0)),  '[-1,0] は [-1,0] と等しい');
  assert.ok(!this.range.equals(new ClosedRange(0, 0)), '[-1,0] は [0,0] と等しくない');
});

// 例外
module('例外系');

test('上端点より下端点が大きい閉区間を作った場合に例外が発生する', function(assert) {
  assert.throws(function() {
      new ClosedRange(9, 1);
  });
});

test('上端点より下端点が大きい閉区間を作った場合に「上端点より下端点が大きい閉区間は作れないよ」というメッセージが返る', function(assert) {
   try {
      new ClosedRange(9, 1);
   }
   catch (e) {
      assert.equal(e.message, '上端点より下端点が大きい閉区間は作れないよ');
   }
});

test('下端点に値が渡されない場合に例外が発生する', function(assert) {
  assert.throws(function() {
      new ClosedRange();
  });
});

test('下端点に値が渡されない場合に「下端点が空だよ」というメッセージが返る', function(assert) {
   try {
      new ClosedRange();
   }
   catch (e) {
      assert.equal(e.message, '下端点が空だよ');
   }
});

test('上端点に値が渡されない場合に例外が発生する', function(assert) {
  assert.throws(function() {
      new ClosedRange(1);
  });
});

test('上端点に値が渡されない場合に「上端点が空だよ」というメッセージが返る', function(assert) {
   try {
      new ClosedRange(1);
   }
   catch (e) {
      assert.equal(e.message, '上端点が空だよ');
   }
});

test('下端点に数値以外を入れた場合に例外が発生する', function(assert) {
  assert.throws(function() {
      new ClosedRange('a', 1);
  });
});

test('下端点に数値以外を入れた場合に「下端点が数字じゃないよ」というメッセージが返る', function(assert) {
   try {
      new ClosedRange('a', 1);
   }
   catch (e) {
      assert.equal(e.message, '下端点が数字じゃないよ');
   }
});

test('上端点に数値以外を入れた場合に例外が発生する', function(assert) {
  assert.throws(function() {
      new ClosedRange(1, {});
  });
});

test('上端点に数値以外を入れた場合に「上端点が数字じゃないよ」というメッセージが返る', function(assert) {
   try {
      new ClosedRange(1, 'a');
   }
   catch (e) {
      assert.equal(e.message, '上端点が数字じゃないよ');
   }
});