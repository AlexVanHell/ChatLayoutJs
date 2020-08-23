/**
 * @template T Items type
 */
export interface ChatLayoutListHandlerInterface<T> {
	/**
	 * Add new item to list
	 * @param item The item object to add into the list
	 * @param index Index position to insert the item
	 * Ignore this parameter to add at the end
	 */
	add(item: T, index?: number): number;

	/**
	 * Remove item at specific position
	 * @param index Index position to remove the item
	 */
	removeAt(index: number): void;

	/**
	 * Remove item at specific position
	 * @param index Index position to remove the item
	 */
	removeById(id: string): void;
}
