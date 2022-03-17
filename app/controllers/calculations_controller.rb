class CalculationsController < ApplicationController
  def index
    @calculations = Calculation.all
  end

  def new
    @calculation = Calculation.new
  end

  def create
    @calculation = Calculation.new(calculation_params)
    if @calculation.save
      redirect_to user_session_path
    else
      render :new
    end
  end

  private 
  def calculation_params
    params.require(:calculation).permit(:weight, :calorie, :protein, :fat, :carbo).merge(user_id: current_user.id)
  end
end
