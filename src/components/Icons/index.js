import React from 'react'
import { Instagram } from './Instagram';
import { Email } from './Email';
import { Facebook } from './Facebook';
import { Apple } from './Apple';
import { Spotify } from './Spotify'
import { Youtube } from './Youtube';

const Icon = props => {
    switch (props.name.toLowerCase()) {
        case "instagram":
            return <Instagram {...props} />;
        case "email":
            return <Email {...props} />;
        case "facebook":
            return <Facebook {...props} />;
        case "apple":
            return <Apple {...props} />;
        case "spotify":
            return <Spotify {...props} />;
        case "youtube":
            return <Youtube {...props} />;
        default:
            return <div />;
    }
};

export { Icon };