class CalculationsController < ApplicationController
  def index
    @calculations = Calculation.all
  end

  def new
    @calculation = Calculation.new
  end
end
