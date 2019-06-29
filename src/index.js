import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';

const App = () => {

    const todoData = [
        { label: 'Drink coffee', important: false },
        { label: 'Make something ', important: true },
        { label: 'Another todos', important: false },
        { label: 'Have a lunch', important: false },
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
}

ReactDOM.render(<App />,
    document.getElementById('root'));