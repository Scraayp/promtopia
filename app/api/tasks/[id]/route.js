import Task from '@/models/task';
import { connectToDB } from '@/utils/database';

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate('creator');
    if (!prompt) return new Response('Task Not Found', { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { task, tag } = await request.json();

  try {
    await connectToDB();

    // Find the existing prompt by ID
    const existingTask = await Task.findById(params.id);

    if (!existingTask) {
      return new Response('Task not found', { status: 404 });
    }

    // Update the prompt with new data
    existingTask.task = task;

    await existingTask.save();

    return new Response('Successfully updated the Task', { status: 200 });
  } catch (error) {
    return new Response('Error Updating Task', { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the prompt by ID and remove it
    await Task.findByIdAndRemove(params.id);

    return new Response('Task deleted successfully', { status: 200 });
  } catch (error) {
    return new Response('Error deleting taskw', { status: 500 });
  }
};
