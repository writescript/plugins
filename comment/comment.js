
/**
 * @param {string} msg - the comment you want to write
 * @param {object} opt - options for the writer
 */
function writeComment(msg, opt) {
  var o = opt || {msg: '',prefix: '// ', body: null};
  o.body = o.prefix+msg
  writeln(o.body)
  return o
}

/**
 * @param {array} msgs - the comment you want to write
 * @param {object} opt - options for the writer
 */
function writeMultiComment(msgs, opt) {
  var o = opt || {begin: '/**', end: ' */', prefix: ' * '}
  writeln(o.begin)
  for(var i = 0; i < msgs.length; i++) {
    writeComment(msgs[i], {prefix: o.prefix})
  }
  writeln(o.end)
}
