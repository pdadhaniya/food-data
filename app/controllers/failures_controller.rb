class FailuresController < ApplicationController
  def index
    @response = HTTParty.get('https://data.cityofchicago.org/resource/4ijn-s7e5.json?$limit=5000&results=Fail')
    render json: @response
  end
end
