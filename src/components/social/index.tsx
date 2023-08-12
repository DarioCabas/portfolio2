import PropTypes from 'prop-types';
import config from '@/config'
import { StyledSocialList } from './styles';
import Side from '../side';
import { Icon } from '../icons';

interface SocialProps {
  isHome?: boolean;
}
const Social = ({ isHome }: SocialProps) => {
  const { socialMedia } = config;
  return (
    <Side isHome={isHome} orientation="left">
      <StyledSocialList>
        {socialMedia &&
          socialMedia.map(({ url, name }) => (
            <li key={name}>
              <a rel="noreferrer" target="_blank" href={url} aria-label={name}>
                <Icon name={name} />
              </a>
            </li>
          ))}
      </StyledSocialList>
    </Side>
  )

}



Social.propTypes = {
  isHome: PropTypes.bool,
};

export default Social;
