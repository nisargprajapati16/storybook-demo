const Card = ({
    name,
    description
}) => (
    <div class="card">
      <div class="content">
        <div class="header">{name}</div>
        <div class="description">
          {description}
        </div>
      </div>
      <div class="ui bottom attached button">
        <i class="add icon"></i>
        Add Friend
      </div>
    </div>
)

export default Card
