class FailuresController < ApplicationController
  def index
    response = HTTParty.get(ENV["CHICAGO_API_URL"]+'$limit=1000&results=Fail')
    complete_response = []
    response.each do |record|
      complete_response << record if record["violations"]
    end
    complete_response.each do |record|
      record["number"] = record["violations"].split("|").length
      record["violations"] = record["violations"].titleize.split("|").sort.map { |x| x.split("   ") }.flatten
      record["dba_name"] = record["dba_name"].titleize
      record["address"] = "#{record["address"].chop.titleize}, #{record["city"].titleize}, #{record["state"]} #{record["zip"]}"
    end

    render json: complete_response
  end

  def show
    search = params[:id]
    if search.length == 5
      response = HTTParty.get(ENV["CHICAGO_API_URL"]+"$limit=1000&results=Fail&zip="+search)
    elsif search.length == 10
      response = HTTParty.get(ENV["CHICAGO_API_URL"]+"$limit=1000&results=Fail&inspection_date="+search+"T00:00:00")
    end
    complete_response = []
    response.each do |record|
      complete_response << record if record["violations"]
    end
    complete_response.each do |record|
      record["number"] = record["violations"].split("|").length
      record["violations"] = record["violations"].titleize.split("|").sort.map { |x| x.split("   ") }.flatten
      record["dba_name"] = record["dba_name"].titleize
      record["address"] = "#{record["address"].chop}, #{record["city"]}, #{record["state"]} #{record["zip"]}".titleize
    end
    render json: complete_response
  end
end