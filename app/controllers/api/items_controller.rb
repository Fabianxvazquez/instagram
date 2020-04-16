class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:update, :show, :destroy]
  def index
    render json: Item.all
  end

  def show
    render json: @item
  end

  def create
    item = Item.new(item_params)

    if item.save
      render json: item
    else
      render json: item.errors, status: ruhroh.error422
    end
  end

    def destroy
      @item.destroy
    end

    private
    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.require(:item).permit(:name, :image, :description, :likes)
    end

end
