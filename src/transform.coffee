through = require('through')
combine = require('combine-source-map')

captureRequire = ->
  if typeof require == 'function'
    _global = (-> this).call(null)
    (_global.dbgreq ?= []).push(require)

module.exports = (filename) ->
  prelude = '(' + captureRequire.toString() + ')();'
  buffer = ''

  write = (buf) -> buffer += buf

  end = ->
    @queue(
      prelude +
      combine.removeComments(buffer) + '\n' +
      combine.create().addFile(
        {sourceFile: filename, source: buffer}
        {line: prelude.split('\n').length - 1}
      ).comment()
    )
    @queue(null)
  through(write, end)
