export class PipeService {
    public static applyPipes(value: string, pipes: PipeInput[]): string {
        pipes.forEach(pipeInput => {
            pipeInput.params && Array.isArray(pipeInput.params) ?
                value = pipeInput.pipe.transform(value, ...pipeInput.params) :
                value = pipeInput.pipe.transform(value);
        });
        return value;
    }
}

export interface Pipe {
    transform(value: string, ...args: any[]): string;
}

export interface PipeInput {
    pipe: Pipe;
    params?: any[];
}
