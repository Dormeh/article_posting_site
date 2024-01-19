import { SelectContentPreviewType } from 'shared/ui/SelectContentPreview/ui/SelectContentPreview';
import PlateIcon from 'shared/assets/icons/plateView.svg';
import ListIcon from 'shared/assets/icons/listView.svg';
import { ContentView } from 'shared/model/types/types';

export const contentArticlesPageSelects:SelectContentPreviewType[] = [
    {
        Icon: PlateIcon,
        view: ContentView.PLATE,
    },
    {
        Icon: ListIcon,
        view: ContentView.LIST,
    },
];
