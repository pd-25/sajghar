import { Readable } from 'stream';

export function convertRequestToNodeStream(req) {
  const stream = new Readable();
  stream._read = () => {}; // _read is required but you can noop it
  stream.push(Buffer.from(req.body));
  stream.push(null);
  return stream;
}
