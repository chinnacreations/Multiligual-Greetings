import {ListContainer, ListImage} from './styledComponents'

const LanguageItem = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails

  return (
    <>
      <ListContainer>
        <ListImage src={imageUrl} alt={imageAltText} />
      </ListContainer>
    </>
  )
}
export default LanguageItem
