import { Component, signal } from '@angular/core';

interface Course {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
    <h1>Online Store | Courses</h1>
    <section>
      <ul>
        @for (course of courses(); track course.id) {
          <li>{{course.name}}</li>
        } @empty {
          <li class="empty">No courses yet</li>
        }
      </ul>
    </section>
    @if (courses().length > 0) {
      <section class="buttons">
        <a target="_blank" href="https://courses.decodedfrontend.io" class="primary">See All Courses</a>
      </section>
    }
  `,
})
export class AppComponent {
  courses = signal<Course[]>([]);
}
