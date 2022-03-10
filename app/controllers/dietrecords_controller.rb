class DietrecordsController < ApplicationController
  def index
    @dietrecords = Dietrecord.all
  end
end
