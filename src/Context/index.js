const { createContext, useState } = require("react");

export const ARTICLES_CONTEXT = createContext(null);

const Context = ({ children }) => {
	const [articles, setArticles] = useState([]);

	return (
		<ARTICLES_CONTEXT.Provider value={{ articles, setArticles }}>
			{children}
		</ARTICLES_CONTEXT.Provider>
	);
};

export default Context;
