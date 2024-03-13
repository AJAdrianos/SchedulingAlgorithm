<script>
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    export let options;

    let selected_option = 'RR';

    function selectOption(){
        dispatch(
            'message',{
                value: selected_option
            }
        );
    }

</script>

<select bind:value={selected_option} on:change={selectOption}>
    <!-- 	reduce code by directly iterating $cars via Object.entries/.keys/.values(obj) -->
        {#each Object.entries($options) as [key, value]}
        <option value={key}>
            {value}
        </option>
        {/each}
    </select>