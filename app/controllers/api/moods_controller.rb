class Api::MoodsController < ApplicationController
  before_action :force_json_request

  def create
    mood = Mood.find_or_create_by(uid: params[:uid], date: params[:date])
    if mood.update(mood_params)
      respond_to do |format|
        format.json { render json: { status: 200 } }
      end
    else
      respond_to do |format|
        format.json { render json: { status: 422 } }
      end
    end
  end

  def show
  end

  private
    def mood_params
      params.permit(:uid, :date, :mood)
    end

    def force_json_request
      request.format = :json
    end
end
