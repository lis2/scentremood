class HistoryController < ApplicationController
  def show
    @moods = Mood.select(:id, :uid, :mood, :date).where(uid: params[:uid])
  end
end
