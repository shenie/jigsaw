#!/usr/bin/env ruby

require 'webrick'

class NonCachingFileHandler < WEBrick::HTTPServlet::FileHandler
  def prevent_caching(res)
    res['ETag']          = nil
    res['Last-Modified'] = Time.now + 100**4
    res['Cache-Control'] = 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0'
    res['Pragma']        = 'no-cache'
    res['Expires']       = Time.now - 100**4
    res['Access-Control-Allow-Origin'] = "http://localhost:8080"
  end
  
  def do_GET(req, res)
    super
    prevent_caching(res)
  end

end

server = WEBrick::HTTPServer.new :Port => 9090
server.mount "/", NonCachingFileHandler , './'
trap('INT') { server.stop }
server.start