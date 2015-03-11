class FailuresController < ApplicationController
  def index
    response = HTTParty.get('https://data.cityofchicago.org/resource/4ijn-s7e5.json?$limit=1000&results=Fail')
    complete_response = []
    response.each do |record|
      complete_response << record if record["violations"]
    end
    complete_response.each do |record|
      record["violations"] = record["violations"].titleize
      record["violations"] = record["violations"].split("|").sort
    end
    render json: complete_response
  end

  def show
    search = params[:id]
    if search.length == 5
      response = HTTParty.get("https://data.cityofchicago.org/resource/4ijn-s7e5.json?$limit=1000&results=Fail&zip="+search)
    elsif search.length == 10
      response = HTTParty.get("https://data.cityofchicago.org/resource/4ijn-s7e5.json?$limit=1000&results=Fail&inspection_date="+search+"T00:00:00")
    end
    complete_response = []
    response.each do |record|
      complete_response << record if record["violations"]
    end
    complete_response.each do |record|
      record["violations"] = record["violations"].titleize
      record["violations"] = record["violations"].split("|").sort
    end
    render json: response
  end
end
