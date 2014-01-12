module.exports = (name) ->
  unless typeof(dbgreq) == 'object'
    throw new Error "no global debug require is available. You need to use the related browserify transform."
  for func in dbgreq
    try
      return func(name)
    catch err
      null
