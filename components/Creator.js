/**
 * Individual creator page
 */

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import styled from 'styled-components';

import ArtworkList from './ArtworkList';
import Cell from './Cell';
import Social from './Social';
import Video from './Video';
import { color, media, space, typography } from '../styles/style-utils';

/**
 * @section Styles
 */

const Card = styled.div`
  background-color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 8px 48px rgba(0, 80, 102, 0.2);
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4em;
  padding-bottom: ${space()};
  padding-top: ${space()};
  padding-left: ${space()};
  padding-right: ${space()};

  h1 {
    line-height: 1;
    margin-bottom: ${space()};
    text-align: center;
    width: 100%;
    ${media.s`
      margin-bottom: ${space()};
    `}
  }

  ${media.s`
    padding: ${space(2)};
  `}
`;

const Title = styled.h1`
  color: ${color.blue};
  font-family: ${typography.heading};
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 0;

  ${media.s`
    font-size: 42px;
  `}
`;

const Quote = styled.blockquote`
  border-bottom: 2px dotted ${color.grayT};
  font-size: 1em;
  font-style: italic;
  font-weight: 400;
  margin-bottom: ${space(2)};
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: ${space(1.5)};
  padding-left: ${space()};
  padding-right: ${space()};
  text-align: center;

  ${media.s`
    font-size: 1.25em;
    padding-left: ${space(2)};
    padding-right: ${space(2)};
  `}
`;

const ArtworkContainer = styled.div`
  width: 100%;

  ${media.s`
    width: 50%;
  `}
`;

const Transcript = styled.div`
  width: 100%;

  ${media.s`
    width: 50%;
  `}

  h2 {
    color: ${color.blueSS};
    font-size: 0.75em;
    margin-bottom: 0.5em;
    ${media.s`
      font-size: 0.875em;
    `}

    + p {
      margin-top: 0;
    }
  }

  p {
    color: ${color.gray};
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 2em;
    margin-top: 2em;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${space(0.25)};
  padding-bottom: ${space(0.5)};
`;

const Footer = styled.div`
  border-top: 2px dotted ${color.grayT};
  margin-top: ${space()};
  padding-top: ${space()};
  text-align: center;
  width: 100%;

  h5 {
    color: ${color.blue};
    font-weight: 400;
    letter-spacing: 0.125em;
    text-transform: uppercase;
  }
`;

/**
 * @section Template
 */

const Creator = props => (
  <div itemScope={true} itemType="https://schema.org/TVEpisode">
    <meta itemProp="episodeNumber" content={props.episode} />
    <meta itemProp="datePublished" content={props.creator.added} />
    <meta itemProp="image" content={`http://orlandocreators.com/static/assets/${props.creator.slug}-preview.jpg`} />
    <Head>
      <meta type="og:image" content={`/static/assets/${props.creator.slug}-preview.jpg`} />
      <meta type="twitter:image" content={`/static/assets/${props.creator.slug}-preview.jpg`} />
    </Head>
    <Cell large>
      <Video src={`https://www.youtube.com/embed/${props.creator.videoID}?rel=0&color=white&modestbranding=1`} />
    </Cell>
    <Cell>
      <Card>
        <Title itemProp="name">{props.creator.name}</Title>
        <Quote>{props.creator.quote}</Quote>
        <ArtworkContainer>
          <ArtworkList creator={props.creator.name} artworks={props.artworks} />
        </ArtworkContainer>
        <Transcript dangerouslySetInnerHTML={{ __html: props.transcript }} />
        <Footer itemProp="actor" itemScope itemType="https://schema.org/Person">
          <h5 itemProp="name">{`Connect with ${props.creator.name}`}</h5>
          <SocialContainer>
            {props.creator.social.map((social, key) => (
              <Social
                key={key}
                name={props.creator.name}
                type={social.type}
                url={social.url}
              />
            ))}
          </SocialContainer>
        </Footer>
      </Card>
    </Cell>
  </div>
);

Creator.propTypes = {
  artworks: PropTypes.array.isRequired,
  creator: PropTypes.object.isRequired,
  episode: PropTypes.number.isRequired,
  transcript: PropTypes.string.isRequired,
};

export default Creator;
