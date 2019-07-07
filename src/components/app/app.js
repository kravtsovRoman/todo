import React from 'react';

// Components
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';


export default class App extends React.Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        term: '',
        filter: 'all'
    };

    createTodoItem(label) {
        return ({
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        })
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newTodo = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newTodo
            }
        })
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {
            const newTodo = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newTodo
            }
        })


    }

    toggleProperty(arr, propsName, id) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propsName]: !oldItem[propsName] };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, 'important', id)
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, 'done', id)
            }
        })
    }

    onHandleSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
    }

    search = (items, term) => {
        if (term.length === 0) return items;

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    filter = (items, filter) => {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    onChangeFilter = (filter) => {
        this.setState({
            filter
        });
    }

    render() {

        const { todoData, term, filter } = this.state;

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        const visibleBlock = this.filter(this.search(todoData, term), filter);

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearch={this.onHandleSearch} />
                    <ItemStatusFilter
                        filter={filter}
                        onChangeFilter={this.onChangeFilter} />
                </div>

                <TodoList
                    todos={visibleBlock}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdd={this.addItem} />
            </div>
        );
    }
};
