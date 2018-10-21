import React, { Fragment } from 'react'
import { Box } from '../Box/Box'
import { Section } from '../Section/Section'
import { Image } from '../Image/Image'

import styles from './FooterStyles'

import facebookLogo from '../../images/icons/square-facebook.svg'
import twitterLogo from '../../images/icons/square-twitter.svg'
import emailLogo from '../../images/icons/mail-square-social-media.svg'
import carShareLogo from '../../images/logos/car-share-logo.png'

export const Footer = ({ disclaimer }) => (
	<Section style='footer'>
		<Box classes={['box', 'row', 'white']}>
			{ disclaimer ? 
				<Fragment>
					<p>© 2016 CarShare Compare, All Rights Reserved.</p>
					<div>
						<hr className={styles['blue']} />
						<small>
							Disclaimer: CarShare Compare strives to keep its information accurate and up to date. This information may be different than what you see when you visit a car share service provider or specific service’s site. This site's services are presented without warranty. Additionally, this site may be compensated through third party advertisers. However, the results of our comparison service tool are based on objective analysis. For more information, please feel free to email with inquiries.
						</small>
					</div>
				</Fragment> : 
				<Fragment>
					<div className={styles['social-icons']}>
						<Box classes={['row']}><p>Find us on social media</p></Box>
						<Box classes={['box']}>
							<Image imageSrc={facebookLogo} altText="Link to Facebook" classes={['small']} />
							<Image imageSrc={twitterLogo} altText="Link to Twitter" classes={['small']} />
							<Image imageSrc={emailLogo} altText="Link to email" classes={['small']} />
						</Box>
					</div>
					<div className={styles['copyright']}>
						<Image imageSrc={carShareLogo} altText="steering wheel" classes={['medium']} />
					</div>
					<div className={styles['copyright']}>
						<p>© 2016 CarShare Compare, All Rights Reserved.</p>
					</div>
				</Fragment> 
			}
		</Box>
	</Section>
)