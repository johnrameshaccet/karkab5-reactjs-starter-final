import React from 'react';

const FeedContext = React.createContext(true)

export const FeedProvider = FeedContext.Provider
export const FeedConsumer = FeedContext.Consumer

export default FeedContext