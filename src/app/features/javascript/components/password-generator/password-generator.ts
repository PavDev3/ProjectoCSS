import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  imports: [RouterLink, FormsModule],
  templateUrl: './password-generator.html',
  styleUrl: './password-generator.scss'
})
export class PasswordGenerator {
  length = signal(16);
  useUppercase = signal(true);
  useLowercase = signal(true);
  useNumbers = signal(true);
  useSymbols = signal(true);
  password = signal('');
  copied = signal(false);

  strengthLabel = computed(() => {
    const p = this.password();
    if (!p) return '';
    if (p.length < 8) return 'Weak';
    const score = [/[A-Z]/, /[a-z]/, /[0-9]/, /[^A-Za-z0-9]/].filter(r => r.test(p)).length;
    return score <= 1 ? 'Weak' : score === 2 ? 'Fair' : score === 3 ? 'Good' : 'Strong';
  });

  strengthClass = computed(() => this.strengthLabel().toLowerCase());

  generate() {
    const chars = [
      this.useLowercase() ? 'abcdefghijklmnopqrstuvwxyz' : '',
      this.useUppercase() ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '',
      this.useNumbers()   ? '0123456789' : '',
      this.useSymbols()   ? '!@#$%^&*()_+-=[]{}|;:,.<>?' : '',
    ].join('');
    if (!chars) return;
    let pwd = '';
    const arr = new Uint32Array(this.length());
    crypto.getRandomValues(arr);
    arr.forEach(n => pwd += chars[n % chars.length]);
    this.password.set(pwd);
    this.copied.set(false);
  }

  async copy() {
    if (!this.password()) return;
    await navigator.clipboard.writeText(this.password());
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000);
  }
}
