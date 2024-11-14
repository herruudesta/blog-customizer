import { createRoot } from 'react-dom/client';
import { useState, StrictMode, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	ArticleStateType,
	defaultArticleState,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

const App = () => {
	const [appState, setAppState] =
		useState<ArticleStateType>(defaultArticleState);

	const style = {
		'--font-family': appState.fontFamilyOption.value,
		'--font-size': appState.fontSizeOption.value,
		'--font-color': appState.fontColor.value,
		'--container-width': appState.contentWidth.value,
		'--bg-color': appState.backgroundColor.value,
	} as CSSProperties;

	return (
		<main className={clsx(styles.main)} style={style}>
			<ArticleParamsForm setAppState={setAppState} />
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
