import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

interface Course {
  id: string;
  name: string;
}

@Component({
  selector: 'df-root',
  template: `
    <h1>Online Store | Courses</h1>
    <section>
      <ul>
        @for (course of courses(); track course.id) {
          <li>{{ course.name }}</li>
        } @empty {
          <li class="empty">No courses yet</li>
        }
      </ul>
    </section>
    @if (courses().length > 0) {
      <section class="buttons">
        <a
          target="_blank"
          href="https://courses.decodedfrontend.io"
          class="primary"
          >See All Courses</a
        >
      </section>
    }
  `,
})
export class AppComponent {
  #http = inject(HttpClient);
  courses = toSignal(
    this.#http.get<Course[]>('/api/courses'),
    { initialValue: [] },
  );
}
