const Loader = ({ size = "small", isDoubleLoader = false }) => (
  <div class="ui active inverted dimmer">
    <div class={`ui ${size} text loader ${isDoubleLoader && "double"}`}>Loading</div>
  </div>
)

export default Loader