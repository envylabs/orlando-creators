import React from 'react';
import Head from 'next/head';

import Header from '../../components/Header';
import Creator from '../../components/Creator';
import Parallax from '../../components/Parallax';

import artworks from '../../artworks/clark-orr';
import transcript from '../../transcripts/clark-orr';
import creators from '../../data/creators.json';

const creator = creators.find(item => (item.slug === 'clark-orr'));
const pageTitle = 'Clark Orr Interview (Episode 002)';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artworks,
      creator,
      transcript,
    };
  }
  render() {
    return (
      <Parallax>
        <main rel="main">
          <Head>
            <title>{pageTitle}</title>
            <meta property="og:image" content={`/static/assets/${creator.slug}-preview.jpg`} />
            <meta property="og:type" content="video.episode" />
            <meta property="og:url" content={`http://www.orlandocreators.com/creator/${creator.slug}`} />
            <meta property="og:video" content={`https://www.youtube.com/watch?v=${creator.videoID}`} />
            <meta property="og:video:actor" content={creator.name} />
            <meta property="og:video:height" content="720" />
            <meta property="og:video:release_date" content={creator.added} />
            <meta property="og:video:secure_url" content={`https://www.youtube.com/embed/${creator.videoID}`} />
            <meta property="og:video:series" content="Orlando Creators" />
            <meta property="og:video:tag" content="adobe" />
            <meta property="og:video:tag" content="artist" />
            <meta property="og:video:tag" content="creative" />
            <meta property="og:video:tag" content="design" />
            <meta property="og:video:tag" content="dribbble" />
            <meta property="og:video:tag" content="illustration" />
            <meta property="og:video:tag" content="illustrator" />
            <meta property="og:video:tag" content="interview" />
            <meta property="og:video:tag" content="orlando" />
            <meta property="og:video:tag" content="photoshop" />
            <meta property="og:video:type" content="application/x-shockwave-flash" />
            <meta property="og:video:type" content="text/html" />
            <meta property="og:video:url" content={`https://www.youtube.com/embed/${creator.videoID}`} />
            <meta property="og:video:width" content="1280" />
            <meta name="twitter:card" content="player" />
            <meta name="twitter:description" content={creator.description} />
            <meta name="twitter:image" content={`/static/assets/${creator.slug}-preview.jpg`} />
            <meta name="twitter:player" content={`https://www.youtube.com/embed/${creator.videoID}`} />
            <meta name="twitter:player:height" content="720" />
            <meta name="twitter:player:width" content="1280" />
            <meta name="twitter:site" content="@orlandocreators" />
            <meta name="twitter:site_name" content="http://www.orlandocreators.com" />
            <meta name="twitter:title" content={pageTitle} />
          </Head>
          <Header />
          <Creator
            creator={this.state.creator}
            episode={2}
            transcript={this.state.transcript}
            artworks={this.state.artworks}
          />
        </main>
      </Parallax>
    );
  }
}
