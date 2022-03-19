class DietrecordsController < ApplicationController
  def index
    @dietrecords = Dietrecord.all
  end

  def new
    @dietrecord = Dietrecord.new
  end

  def create
    @dietrecord = Dietrecord.new(dietrecord_params)
    if @dietrecord.save
      redirect_to user_session_path
    else
      render :new
    end
  end

  private 
  def dietrecord_params
    params.require(:dietrecord).permit(:food, :text, :protein, :fat, :carbo).merge(user_id: current_user.id)
  end
end
