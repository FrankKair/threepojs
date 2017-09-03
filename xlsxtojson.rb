#!/usr/bin/env ruby
require 'rubyXL'
require 'json'

xlsx_file = ARGV[0]
workbook = RubyXL::Parser.parse(xlsx_file)
worksheet = workbook[0]

strings = {}
worksheet.each do |row|
  key = row.cells[0].value
  pt = row.cells[1].value
  en = row.cells[2].value
  es = row.cells[3].value

  strings[:"#{key}"] = { :PT => pt, :EN => en, :ES => es }
end
strings.delete(:key)

system("touch strings.json")
open("strings.json", 'a') do |file|
  file << JSON.pretty_generate(strings)
end