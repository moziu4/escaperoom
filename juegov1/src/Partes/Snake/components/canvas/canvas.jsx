import { connect } from "react-redux"
import { ReactReduxContext, Provider } from "react-redux"
import { Stage, Layer, Text } from "react-konva"
import PropTypes from "prop-types"
import { WINDOW_SIZE } from "../../utils/constants"

import Snake from "../snake/index"
import Food from "../food/index"

import "./style.css"

const props = {
  onMove: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  currentScore: PropTypes.number.isRequired,
  highestScore: PropTypes.number.isRequired,
}

const Canvas = (props) => {
  const { onMove, reset, isGameOver, currentScore, highestScore } = props

  const onKeyPressed = (e) => {
    onMove(e.key)
    e.preventDefault()
  }

  const renderGameOver = isGameOver && (
    <Text
      text="Game Over.&#13;&#10;Click here to play again."
      fontSize={16}
      onClick={reset}
    />
  )

  const renderScores = (
    <div className="canvas-score">
      <p className="canvas-score__current">Puntuación: {currentScore}</p>
      <p className="canvas-score__highest">Máxima puntuación: {highestScore}</p>
    </div>
  )

  return (
    <div className="canvas">
      {renderScores}
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <div className="canvas-stage" tabIndex="1" onKeyDown={onKeyPressed}>
            <Stage width={WINDOW_SIZE} height={WINDOW_SIZE}>
              <Provider store={store}>
                <Layer>
                  <Snake />
                  <Food />
                  {renderGameOver}
                </Layer>
              </Provider>
            </Stage>
          </div>
        )}
      </ReactReduxContext.Consumer>
    </div>
  )
}

Canvas.propTypes = props
export default connect((store) => ({
  Snake: store.Snake,
}))(Canvas)
