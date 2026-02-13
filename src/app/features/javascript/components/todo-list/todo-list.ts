import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  imports: [RouterLink, FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList {
  newTodo = '';
  filter = signal<'all' | 'active' | 'completed'>('all');
  todos = signal<Todo[]>([
    { id: 1, text: 'Aprender Angular 20', completed: true },
    { id: 2, text: 'Crear portfolio de CSS', completed: false },
    { id: 3, text: 'Implementar animaciones', completed: false },
  ]);

  filteredTodos = computed(() => {
    const f = this.filter();
    return this.todos().filter(t =>
      f === 'all' ? true : f === 'active' ? !t.completed : t.completed
    );
  });

  activeCount = computed(() => this.todos().filter(t => !t.completed).length);

  addTodo() {
    const text = this.newTodo.trim();
    if (!text) return;
    this.todos.update(todos => [...todos, { id: Date.now(), text, completed: false }]);
    this.newTodo = '';
  }

  toggle(id: number) {
    this.todos.update(todos => todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }

  delete(id: number) {
    this.todos.update(todos => todos.filter(t => t.id !== id));
  }

  clearCompleted() {
    this.todos.update(todos => todos.filter(t => !t.completed));
  }

  setFilter(f: 'all' | 'active' | 'completed') { this.filter.set(f); }
}
