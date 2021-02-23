import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import { TextBlock, MediaBlock, TextRow, RectShape, RoundShape } from 'react-placeholder/lib/placeholders';
import { PlaceholderImage } from './styles';


const Placeholder: React.FC = () => {
    return (
        <ReactPlaceholder showLoadingAnimation={true} type='rect' ready={false} color='#E0E0E0' style={{ width: '100vw', height: '100vh' }}>
            <PlaceholderImage />
        </ReactPlaceholder>
    )
}
export default Placeholder;