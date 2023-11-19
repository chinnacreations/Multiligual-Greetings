import {TabItemContainer, ActiveTabButton, TabButton} from './styledComponents'

const Tabs = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {id, buttonText} = tabDetails

  const onCLickTabItem = () => {
    clickTabItem(id)
  }

  return (
    <TabItemContainer>
      {isActive ? (
        <ActiveTabButton onClick={onCLickTabItem}>{buttonText}</ActiveTabButton>
      ) : (
        <TabButton onClick={onCLickTabItem}>{buttonText}</TabButton>
      )}
    </TabItemContainer>
  )
}
export default Tabs
