class DietrecordsController < ApplicationController
  def index
    @dietrecords = Dietrecord.all
  end

  def new
    @dietrecords = Dietrecord.new
  end
end
