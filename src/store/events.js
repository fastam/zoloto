import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', {
  state: () => ({

    /* выбранные теги */
    selectedTags: [],

    /* список тегов */
    tags: ['IT', 'Conference', 'Design', 'Business'],

    /* все мероприятия (пока мок) */
    allEvents: [
      {
        id: 1,
        title: 'Vue Conference',
        description: 'Большая конференция по Vue.js',
        fullDescription:
          'Полное описание мероприятия. Здесь будет подробная информация о программе, спикерах, расписании и формате участия. Участников ждут доклады, практические воркшопы и нетворкинг.',
        date: '12 июня 2026',
        location: 'Берлин',
        organizer: 'Vue Community',
        participants: 250,
        requirements: 'Открыто для разработчиков любого уровня. Желательно иметь базовые знания JavaScript.',
        image: 'https://picsum.photos/600/400?1',
        tags: ['IT', 'Conference']
      },
      {
        id: 2,
        title: 'Design Meetup',
        description: 'Встреча дизайнеров',
        fullDescription:
          'Мероприятие для дизайнеров всех уровней. Будут обсуждаться тренды, инструменты и реальные кейсы. Отличная возможность расширить профессиональные контакты.',
        date: '18 июля 2026',
        location: 'Амстердам',
        organizer: 'Design Hub',
        participants: 120,
        requirements: 'Подходит для UX/UI дизайнеров и продуктовых специалистов.',
        image: 'https://picsum.photos/600/400?2',
        tags: ['Design']
      },
      {
        id: 3,
        title: 'Startup Pitch',
        description: 'Питч стартапов',
        fullDescription:
          'Молодые команды представят свои проекты инвесторам и экспертам. Можно получить обратную связь и найти партнёров.',
        date: '5 августа 2026',
        location: 'Лондон',
        organizer: 'Startup Club',
        participants: 80,
        requirements: 'Необходимо заранее подать заявку на участие.',
        image: 'https://picsum.photos/600/400?3',
        tags: ['Business']
      },
      {
        id: 4,
        title: 'Tech Meetup',
        description: 'Обсуждение технологий',
        fullDescription:
          'Неформальная встреча разработчиков. Поговорим о новых технологиях, архитектуре и инструментах разработки.',
        date: '20 сентября 2026',
        location: 'Прага',
        organizer: 'Tech Community',
        participants: 150,
        requirements: 'Свободное посещение, регистрация не обязательна.',
        image: 'https://picsum.photos/600/400?4',
        tags: ['IT']
      }
    ],

    /* список отображаемых мероприятий */
    events: [],

    /* текущее мероприятие */
    currentEvent: null

  }),

  actions: {

    /* переключение тега */
    toggleTag(tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter(t => t !== tag)
      } else {
        this.selectedTags.push(tag)
      }
      this.filterEvents()
    },

    /* сброс тегов */
    clearTags() {
      this.selectedTags = []
      this.filterEvents()
    },

    /* фильтрация */
    filterEvents() {
      if (!this.selectedTags.length) {
        this.events = this.allEvents
        return
      }

      this.events = this.allEvents.filter(event =>
        this.selectedTags.every(tag => event.tags.includes(tag))
      )
    },

    /* выбрать событие */
    setCurrentEvent(id) {
      this.currentEvent = this.allEvents.find(e => e.id == id)
    }

  }
})