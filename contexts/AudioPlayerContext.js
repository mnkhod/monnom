import React, { createContext, useContext, useEffect, useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

let AudioPlayerContext = createContext();

function AudioPlayerContextProvider({ children }) {

	return (
		<AudioPlayerContext.Provider>
			{children}
		</AudioPlayerContext.Provider>
	)
}

export { AudioPlayerContextProvider, }
