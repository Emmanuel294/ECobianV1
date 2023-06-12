export type WorkDocument = {
    position: string,
    place: string,
    time: [number, number | 'present'],
    responsibilities: Array<string>
}