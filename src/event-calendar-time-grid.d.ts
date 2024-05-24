declare module '@event-calendar/time-grid' {
    import Calendar from '@event-calendar/core';
  
    export default class TimeGrid extends Calendar {
      constructor(options: {
        el: HTMLElement;
        events?: any[];
        // Add other options and properties as needed
      });
  
      public render(): void;
      public on(event: string, callback: (data: any) => void): void;
      // Add other methods and properties as needed
    }
  }